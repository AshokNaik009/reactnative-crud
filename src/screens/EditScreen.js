import React,{useContext,useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity,TextInput } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  
  return <BlogPostForm/>
};

const styles = StyleSheet.create({});

export default EditScreen;
