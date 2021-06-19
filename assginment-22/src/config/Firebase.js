import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbfMomSSirlt2gGJvR8LtG5ec5TkTzhj8",
  authDomain: "olxapp-50be6.firebaseapp.com",
  projectId: "olxapp-50be6",
  storageBucket: "olxapp-50be6.appspot.com",
  messagingSenderId: "1050132877930",
  appId: "1:1050132877930:web:67aefa58835eb5fec47013",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// CREATE, READ, UPDATE AND DELETE DATA FROM FIREBASE DATABASE

// const ctaHandler = async() =>{

//     let dataToFirebase = {
//       name:"ALi",
//       company: "techloset Solutions",
//       class: "BS Software Engineering",
//       id: "2323",
//       active: true
//     }

//   try {
//     let res = await db.collection("users").add(dataToFirebase)
//     console.log("res", res);

//   } catch (error) {
//     console.log("error", error);
//   }

//   }

//   const ctaFetchHandler = async() =>{

//   try {
//     let data = await db.collection("students").get();
//     let students = [];
//     data.forEach((doc)=>{
//       console.log("id", doc.id);
//        students.push({...doc.data(), docID:doc.id})
//     })

//     console.log("fetch data from firebase", students);

//   } catch (error) {
//     console.log("error", error);
//   }

//   }

//   const ctaDeleteHandler = async() =>{
//   try {
//     let res = await db.collection("students").doc("EPup4V5ocEwoWcF6DsCL").delete()
//     console.log("res", res);

//   } catch (error) {
//     console.log("error", error);
//   }

//   }

//   const ctaUpdateHandler = async() =>{

//     let dataToFirebase = {
//       name:"New Name",
//       company: "techloset sd",
//     }

//   try {
//     let res = await db.collection("students").doc("47b7XmsivN4GlIJzv91e").update(dataToFirebase)
//     console.log("res", res);

//   } catch (error) {
//     console.log("error", error);
//   }

//   }
