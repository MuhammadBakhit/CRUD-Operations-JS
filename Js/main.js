var productNameIpt = document.getElementById('productName');
var productPriceIpt = document.getElementById('productPrice');
var productCategoryIpt = document.getElementById('productCategory');
var productDescIpt = document.getElementById('productDesc');

var productContainer;
if(localStorage.getItem('product') == null)
    {
        productContainer = [];
    }
    else{
        productContainer= JSON.parse(localStorage.getItem("product"));
        displayProduct()
    }

function addProduct(){
    var product = {
        name: productNameIpt.value ,
        price: productPriceIpt.value,
        categary: productCategoryIpt.value,
        desc: productDescIpt.value
    }
    productContainer.push(product);
    console.log(productContainer);
    localStorage.setItem("product", JSON.stringify(productContainer));
    displayProduct()
    clearForm()
}

function clearForm(){
    productNameIpt.value = '';
    productPriceIpt.value = '';
    productCategoryIpt.value = '';
    productDescIpt.value = '';
}

function displayProduct(){

    var cartoon= ``;

    for(var i=0; i < productContainer.length; i++){
        cartoon+= `
            <tr>
                <td>${(i+1)}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].categary}</td>
                <td>${productContainer[i].desc}</td>
                <td><button class="btn btn-outline-warning">update</button></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
            </tr>`;
    };
    document.getElementById("tableRow").innerHTML = cartoon;
}

function deleteProduct(productIndex){
    productContainer.splice(productIndex,1);
    localStorage.setItem("product", JSON.stringify(productContainer));
    displayProduct();
}