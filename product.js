window.onload=function(){
    // alert("working");

    var divFromHtml = document.getElementById("card-images");
    var dataFromLs = JSON.parse(localStorage.getItem("product"));
    
    var stored =[];

    for(var i=0; i<dataFromLs.length ;i++){
        stored+= `<div>
        <div>
          <img
            src="${dataFromLs[i].image}"
            alt="product-image"
          />
        </div>
        <div>
          <p>${dataFromLs[i].name}</p>
          <p>₹${dataFromLs[i].price}</p>
          <button onclick="addTocart(${JSON.stringify(dataFromLs[i])})">Add to Cart</button>
        </div>
      </div>`;
    }
    divFromHtml.innerHTML = stored;

};

function addTocart(pro){
  alert("working");
  console.log(pro);
  var product =JSON.stringify(pro);
  console.log(product);
}

