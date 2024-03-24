
const { getStorage, ref, uploadBytesResumable } = require('firebase/storage');
const { signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require('./config/firebase.config');
const { getDownloadURL } = require('firebase/storage');

async function uploadImage(file, quantity) {
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH);

    if (quantity === 'single') {
        const dateTime = Date.now();
        const fileName = `images/${dateTime}`;
        const storageRef = ref(storageFB, fileName);
        const metadata = {
            contentType: file.type,
        };
        await uploadBytesResumable(storageRef, file.buffer, metadata);

    
        const downloadURL = await getDownloadURL(storageRef);
        return { fileName, downloadURL };
    }
}

module.exports = uploadImage;
