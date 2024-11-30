const registrarUsuario = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Por favor, complete todos los campos");
      return;
    }

    try {
      // Primero verificar si el usuario ya existe
      const usuariosRef = collection(FIRESTORE_DB, "usuarios");
      const q = query(
        usuariosRef,
        where("username", "==", username),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        Alert.alert("Error", "El usuario o correo ya existe");
        return;
      }

      // Crear usuario en Authentication
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );

      // Añadir usuario a Firestore
      await addDoc(usuariosRef, {
        uid: userCredential.user.uid,
        username: username,
        email: email,
        fechaRegistro: new Date(),
      });

      Alert.alert("Éxito", "Usuario registrado correctamente");
      cerrarModal();
    } catch (error) {
      Alert.alert("Error de Registro", error.message);
    }
  };