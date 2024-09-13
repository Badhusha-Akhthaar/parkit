import { db,storage } from '../Firebase.js'
import { doc, getDoc,getDocs, setDoc,query,where,collection } from 'firebase/firestore'
import { getDownloadURL,uploadBytes,ref as storageRef } from 'firebase/storage'

// const db = getFirestore(app)


function getData(entity, id) {
    const docRef = doc(db, entity, id);
    return getDoc(docRef).then((d) => d).catch((e) => { console.log(e) })
    // const doc = await getDoc(docRef)
    // return doc;
}


function getGaragesByUser(userId){
    const docRef = collection(db,"garages");
    const q = query(docRef,where("ownerId","==",userId))
    return getDocs(q);

}

async function setData(entity, data, id,param) {
    const docRef = doc(db, entity, id);
    setDoc(docRef, data,param);
}

async function uploadImage(path,imageData){
    const imageRef = storageRef(storage,path); //{uid}/garages/{garageId}/image
    return new Promise(async (resovle,reject)=>{
        try {
            let snapshot = await uploadBytes(imageRef,imageData);
            let url = await getDownloadURL(snapshot.ref);
            resovle(url)
        } catch (error) {
            reject(error)
        }
    })
}

export { getData, setData, uploadImage, getGaragesByUser }