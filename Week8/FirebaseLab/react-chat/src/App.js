// Components
import Button from './components/Button';
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDwOBrSjvjk_liWkXLz4FvKSDvZZG8F9Pw",
  authDomain: "react-chat-e89e0.firebaseapp.com",
  projectId: "react-chat-e89e0",
  storageBucket: "react-chat-e89e0.appspot.com",
  messagingSenderId: "234854952632",
  appId: "1:234854952632:web:99a8782aacba8e22484e4d"
});

const auth = firebase.auth();
const db = firebase.firestore();
const query = db.collection('messages').orderBy('createdAt').limit(100);

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    // Subscribe to query with onSnapshot
    const unsubscribe = query.onSnapshot(querySnapshot => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      setDocs(data);
    });
  
    // Detach listener
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (initializing) return 'Loading...';

  return ( 
  <div>
    {user ? (
      <>
      <Button onClick={signOut}>Sign out</Button>
      <Channel user={user} />
    </>
    ) : (
    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    )}
  </div>
  );
}

export default App;
