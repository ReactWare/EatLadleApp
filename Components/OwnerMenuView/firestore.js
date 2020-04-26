import firestore from '@react-native-firebase/firestore';

export function addItem(data, addComplete) {
  firestore()
    .collection('knMerchants')
    .add({
      name: data.name,
      address: data.address
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
}

export async function getItems(menuRetrieved) {

  var menuList = [];

  var snapshot = await firestore()
    .collection('knMerchants')
    .get()

    snapshot.forEach((doc) => {
      menuList.push(doc.data())
    })

  menuRetrieved(menuList);
}
