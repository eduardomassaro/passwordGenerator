import { View, Text, StyleSheet, TouchableOpacity, Pressable  } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, handleClose}) {
  const { saveItem } = useStorage();
  

  
  async function handleCopyPassaword() {
    await Clipboard.setStringAsync(password)
    await saveItem("@pass", password)
    
    alert("Senha copiada com sucesso!")
    handleClose();
  }



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.innerPassword} onLongPress={handleCopyPassaword}>
          <Text style={styles.innerText}>
            {password}
          </Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.backButton} onPress={handleClose}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={handleCopyPassaword}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    backgroundColor: "#FFF",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8
  },
  innerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center"
  },
  buttonArea: {
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between"
  },
  backButton: {
    backgroundColor: "rgb(250, 190, 0)",
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
    borderRadius: 8
  },
  backButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
  saveButton: {
    backgroundColor: "#392de9",
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
    borderRadius: 8
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }
});