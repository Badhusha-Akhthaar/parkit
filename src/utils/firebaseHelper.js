import { db } from '../Firebase.js'
import { doc, getDoc, setDoc } from 'firebase/firestore'

// const db = getFirestore(app)


function getData(entity, id) {
    const docRef = doc(db, entity, id);
    return getDoc(docRef).then((d) => d).catch((e) => { console.log(e) })
    // const doc = await getDoc(docRef)
    // return doc;
}

async function setData(entity, data, id,param) {
    const docRef = doc(db, entity, id);
    setDoc(docRef, data,param);
}

export { getData, setData }