import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function PasswordItem ({data, removePassword}) {
  
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return(
    <Pressable onLongPress={removePassword} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{isVisible ? data : '******'}</Text>
        <Ionicons 
          name={isVisible ? "eye" : "eye-off"} 
          size={24} 
          color="white" 
          onPress={toggleVisibility}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  text:{
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*<Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
      <Ionicons name="eye" size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text:{
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
})*/