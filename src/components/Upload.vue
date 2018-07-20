<template>
   <div class="row ">
      <div class="col"> </div>
      <div class = "col-5">
         <h1>Upload Image </h1>
         <br>
         <div class="alert alert-danger" v-if="error===true" role="alert">
            <span style="font-weight:500"> {{errorMessage}} </span>
         </div>
         <form style="text-align:left">
            <div class="form-group">
               <label style="font-weight: 600" for="titleInput">Title</label>
               <input type="text" v-model="form.title" class="form-control" id="titleInput" aria-describedby="passwordHelpBlock">
               <small id="titleHelpBlocks" class="form-text text-muted" >
               Please enter the food type (eg: "nasi goreng")
               </small>
            </div>
            <br>
            <div class="form-group">
               <label style="font-weight: 600" for="descriptionText">Description</label>
               <textarea class="form-control" v-model="form.description" id="descriptionText" rows="4"></textarea>
            </div>
            <br>
            <div class="form-group">
               <label style="font-weight: 600" for="tagsInput">Tags</label>
               <input type="text" class="form-control" v-model="form.tags" id="tagsInput" aria-describedby="passwordHelpBlock">
               <small id="tagsHelpBlocks" class="form-text text-muted">
                  Please separate multiple tags with space (eg: "delicious" "tasty")
               </small>
            </div>
            <br>
            <div class="form-group">
               <label style="font-weight: 600" for="imgUpload">Upload Image: </label>
               <input type="file" class="form-control-file" ref="file" id="imgUpload" aria-describedby="passwordHelpBlock"  v-on:change="handleFileUpload()">
               <small id="tagsHelpBlocks" class="form-text text-muted">
                  File size cannot exceed 5MB
               </small>
            </div>
            <br>
            <button type="button" @click.prevent="getData()" class="btn btn-primary">Submit</button>
         </form>
      </div>
      <div class="col">   </div>
   </div>
</template>

<script>

import axios from 'axios'
export default {
  data:function() {
    return {
      error: false,
      errorMessage: '',
      form: {
        title: '',
        description: '',
        tags: [],
        file: '',
      }
    }
  },
  methods: {
   handleFileUpload(){
   this.form.file = this.$refs.file.files[0];
   },

   getData(){
      console.log(this.form.tempTags);
      // let giveToken = localStorage.getItem("token");
      let giveToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjUxNGExNTI3YjMwMzJmNzMxZjAyMDUiLCJpYXQiOjE1MzIwNjkyMTl9.jCV4_nbqD_F6wZvXl3CUTgExFqVYFactr5_kuh30z30"
      let self = this;

      if(this.form.title !== "" && (this.form.file !== "" && this.form.file !== null)){
         self.error = false;
        
         let formData = new FormData();
         formData.append('file', self.form.file)
         formData.append('tags', self.form.tags)
         formData.append('title', self.form.title)
         formData.append('description', self.form.description);
         console.log("!!!!", formData);

         if(giveToken !== null){
            axios.post("http://localhost:3000/foods/image", formData, 
            {
               headers: {
                  token: giveToken,
               }
            })
            .then(function(response){
               console.log(response);
               self.getImage();
            })
            .catch(function(err){
               console.log(err);
            })
         }

         else{
            alert("Login first!");
         }
      }

      else{
         self.error = true;
         if(self.form.title === ""){
            self.errorMessage = "Please fill in title"
         }
         else if(self.form.file === ""){
            self.errorMessage = "Please select the image to upload"
         }
      }
   }
  }
}
</script>

<style scoped>

</style>
