import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private storage: AngularFireStorage) { }


  uploadFile(file: File, path: string): Observable<string> {
    const fileRef = this.storage.ref(path);
    const task = this.storage.upload(path, file);

    return new Observable(observer => {
      task.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL = await fileRef.getDownloadURL().toPromise();
          observer.next(downloadURL);
          observer.complete();
        })
      ).subscribe(
        (snapshot) => {

        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  deleteFile(path: string): Observable<void> {
    const fileRef = this.storage.ref(path);
    return fileRef.delete();
  }
}
