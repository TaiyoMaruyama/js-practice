const getPostData = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const jsonData = await response.json();
    console.log(jsonData.slice(0, 20))
  }catch(e){
    console.error(e);
  }

  
};

getPostData();