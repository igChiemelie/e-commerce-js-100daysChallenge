customerItemArr = [];
product = [];
buttonsDOM = [];
const cartContent = document.querySelector(".cart-content");
const carttotal = document.querySelector(".totalCost");
const cartData = $('.cartData');

$(function () {
    // alert(23);
            // console.log($('.js-show-cart').attr('data-notify'));

    function setupApp() {
        customerItemArr = getCart();

        if (customerItemArr) {
            let cartNo = customerItemArr.length;
            console.log(cartNo);
            let resultTotal = $('.cart-items').text(cartNo);
            console.log($('.js-show-cart').attr('data-notify'));
            $('.cartItem').attr('data-notify', 20); //setter


            populateCart();


        } else {
            console.log('not here');

        }

    }
    setupApp();

    function showCart() {

        if (customerItemArr.length > 0) {
            $('.modalShadow').modal('open');

        } else {
            alert('Please add a product to cart before proceeding to checkout');
        }
    }


    function populateCart() {

        // cart.forEach(item => this.addCartItem(item));
        console.log(customerItemArr);
        // var totalCost = 0;
        customerItemArr.forEach(function (item, index) {
            var sn = index + 1;
            var tableRowContentSide = 
                                    '<li class="header-cart-item flex-w flex-t m-b-12">\
                                        <div class="header-cart-item-img">\
                                            <img src="images/'+ item[1] + '" alt="IMG">\
                                        </div>\
                                        <div class="header-cart-item-txt p-t-8">\
                                            <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">' + item[0] + '</a>\
                                            <span class = "header-cart-item-info">'+ item[4] + ' x $'+ item[2] + '</span>\
                                        </div>\
                                    </li>';

            $('.header-cart-wrapitem').append(tableRowContentSide);
            var tableRow = 
                            `
                                <tr class="table_row">
                                        <td class="column-1">
                                            <div class="how-itemcart1">
                                                <img src="images/${item[1]}" alt="IMG">
                                            </div>
                                        </td>
                                        <td class="column-2">${item[0]}</td>
                                        <td class="column-3">$ ${item[2]}</td>
                                        <td class="column-4">
                                            <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                                <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i class="fs-16 zmdi zmdi-minus reduce" data-id="${item[3]}"></i>
                                                </div>
                                                <input class="mtext-104 cl3 txt-center num-product" type="number" readonly name="num-product1" value="${item[4]}">
                                                <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i class="fs-16 zmdi zmdi-plus addUp" data-id="${item[3]}"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="column-5">
                                            <i class="fs-16 zmdi zmdi-close deleteProduct" data-id="${item[3]}" style="color:red;cursor:pointer"></i>
                                        </td>
                                    </tr>`;

            $('.table-shopping-cart').append(tableRow);
            // totalCost += parseInt(item[2]);
            totalPrice();
            // console.log(totalCost);
            //pasrse init add up number e.g addition

        });

        $('.header-cart-totals').addClass('totalCost');

        // cartPrice
        $('.totalCost').text(totalPrice());
        deleteProduct();
        increaseQuantity();
        decreaseQuantity();
        cartButton();
    }

    function populateCart2() {

        // cart.forEach(item => this.addCartItem(item));
        // console.log(customerItemArr);
        // var totalCost = 0;
        let lastIndex = customerItemArr;
        // return customerItemArr;

        console.log(lastIndex);

        // if (customerItemArr[customerItemArr.length - 1]) {
        //     return customerItemArr;
        // }
        $('.header-cart-wrapitem').empty();
        lastIndex.forEach(function (item, index) {
            var sn = index + 1;
            var tableRowContentSide2 = '<li class="header-cart-item flex-w flex-t m-b-12">\
                                        <div class="header-cart-item-img">\
                                            <img src="images/' + item[1] + '" alt="IMG">\
                                        </div>\
                                        <div class="header-cart-item-txt p-t-8">\
                                            <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">' + item[0] + '</a>\
                                            <span class = "header-cart-item-info">' + item[4] + ' x $' + item[2] + '</span>\
                                        </div>\
                                    </li>';

            $('.header-cart-wrapitem').append(tableRowContentSide2);

            var tableRowContent =
                             `
                                <tr class="table_row">
                                        <td class="column-1">
                                            <div class="how-itemcart1">
                                                <img src="images/${item[1]}" alt="IMG">
                                            </div>
                                        </td>
                                        <td class="column-2">${item[0]}</td>
                                        <td class="column-3">$ ${item[2]}</td>
                                        <td class="column-4">
                                            <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                                <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i class="fs-16 zmdi zmdi-minus reduce" data-id="${item[3]}></i>
                                                </div>
                                                <input class="mtext-104 cl3 txt-center num-product" type="number" readonly name="num-product1" value="${item[4]}">
                                                <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i class="fs-16 zmdi zmdi-plus addUp" data-id="${item[3]}"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="column-5">
                                            <i class="fs-16 zmdi zmdi-close deleteProduct" data-id="${item[3]}" style="color:red;cursor:pointer"></i>
                                        </td>
                                    </tr>`;
      
            $('.table-shopping-cart').empty();
            $('.table-shopping-cart').append(tableRowContent);
            // $('table').append(tableRowContent2);
            // totalCost += parseInt(item[2]);
            totalPrice();
            // console.log(totalCost);
            //pasrse init add up number e.g addition

        });

        $('.header-cart-totals').addClass('totalCost');

        $('.totalCost').text(totalPrice());
        deleteProduct();
        increaseQuantity();
        decreaseQuantity();
        cartButton();
    }

    $('.view-btn').on('click', function (e) {
        e.preventDefault();
        let views = $(this).attr('data-id');
        console.log(views);
        let url = $(this).attr('action');
        let mtd = $(this).attr('method');
        console.log(mtd);
        console.log(url);



        let formData = new FormData();
        formData.append('views', views);
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: mtd,
            url: url,
            data: formData,
            processData: false,
            contentType: false,
            // dataType:'json',
            // success: function (response) {
            //     console.log(response);
            // }
        });
    });


    $('.addToCart').click(function (e) {
        console.log('selected');
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        var thisPrdtName = $(this).attr('data-name');
        var thisPrdtImg = $(this).attr('data-img');
        var thisPrdtPrice = $(this).attr('data-price');
        var thisPrdtAmount = $(this).attr('data-id');
        // var thisPrdtQuantity = $(this).attr('data-quantity');
        let tempArr = [];
        pushItemToArray(thisPrdtName, tempArr);
        pushItemToArray(thisPrdtImg, tempArr);
        pushItemToArray(thisPrdtPrice, tempArr);
        pushItemToArray(thisPrdtAmount, tempArr);
        pushItemToArray(1, tempArr);

        pushItemToArray(tempArr, customerItemArr);


        if (customerItemArr.length > 0) {

            customerItemArr.forEach(function (item, index) {
                var i = 0;
                // var i > customerItemArr.length
                var itemsTotals = index + 1;
                let result = $('.cart-items').text(itemsTotals);
                $('.cartItem').attr('data-notify', itemsTotals); //setter
                // let productLen = $('.cart-items').text(itemsTotals);
                // console.log(itemsTotals);
            });

        }
        //  storage.saveCart(customerItemArr);
        window.localStorage.setItem('product', JSON.stringify(customerItemArr));
        populateCart2();

    });

    function pushItemToArray(item, array) {
        array.push(item);
    }



    $('#CheckOut').on('click', function (e) {
        e.preventDefault();
        console.log('CheckOut');
        showCart();
    });



    // $('#closeModal').on('click', function (e) {
    //     e.preventDefault();
    //     console.log('i see u now');
    //     $('.modalShadow').modal('close');

    // });

    $('#clearCart').click(function () {
        $('.wrapper-table-shopping-cart').html('');
        customerItemArr.length = 0;
        window.localStorage.removeItem('product');

        // console.log(customerItemArr);
        // clearCart();
        let i = 0;
        let result = $('.cart-items').text(i);
        $('.cartItem').attr('data-notify', i); //setter
        // $('.bag-btn').text('');
        $('.totalCost').text('$0');
        $('.bag-btn').prop('disabled', false);
        $('.bag-btn').append('<i class="zmdi zmdi-shopping-cart" style="color: orange;font-size:large"></i>');
        // $('.modalShadow').modal('close');

    });

    function deleteProduct() {
        $('.deleteProduct').click(function (e) {
            if (customerItemArr.length < 0) {
                alert('Cart Empty');
                (e.target.parentElement.parentElement.parentElement.parentElement).remove();
            } else {
                // console.log(e);
                e.preventDefault();
                let productId = $(this).attr('data-id');
                console.log(productId);
                customerItemArr = customerItemArr.filter(item => productId !== item[3]);
                console.log(customerItemArr);

                (e.target.parentElement.parentElement).remove();

                saveCart(customerItemArr);
                getSingleButtons(productId);
                removeItem(productId);

            }
        });
    }

    function increaseQuantity() {
        $('.addUp').on('click', function (e) {
            e.preventDefault();
            console.log(e);
            alert('tony');
            // let quantity = e.target;
            // console.log(quantity);
            // let id = quantity.dataset.id;
            // console.log(id);
            let productId = $(this).attr('data-id');
            // console.log(productId);
            let tempItem = customerItemArr.find(item => item[3] === productId);
            console.log(tempItem);
            tempItem[4] = tempItem[4] + 1;
            console.log(tempItem[4]);
            window.localStorage.setItem('product', JSON.stringify(customerItemArr));
            e.target.parentElement.previousElementSibling.defaultValue = tempItem[4];
            // e.target.nextElementSibling.innerText = tempItem[4];
            totalPrice();
            $('.totalCost').text(totalPrice());

        });

    }

    function decreaseQuantity() {
        $('.reduce').on('click', function (e) {
            e.preventDefault();
            console.log(e);
            // let quantity = e.target;
            // console.log(quantity);
            // let id = quantity.dataset.id;
            // console.log(id);
            let productId = $(this).attr('data-id');
            // console.log(productId);
            let tempItem = customerItemArr.find(item => item[3] === productId);
            // console.log(tempItem);
            tempItem[4] = tempItem[4] - 1;
            if (tempItem[4] > 0) {
                window.localStorage.setItem('product', JSON.stringify(customerItemArr));
                e.target.parentElement.nextElementSibling.defaultValue = tempItem[4];
                // e.target.previousElementSibling.innerText = tempItem[4];
                totalPrice();
            } else {
                customerItemArr = customerItemArr.filter(item => productId !== item[3]);
                console.log(customerItemArr);
                (e.target.parentElement.parentElement.parentElement.parentElement).remove();
                saveCart(customerItemArr);
                removeItem(productId);
                if (!customerItemArr.length > 0) {
                    console.log('less than zero');
                    // $('.modalShadow').modal('close');
                    alert('Shopping Cart Empty');

                }

            }

        });

    }

    function totalPrice() {
        var totalCost = 0;
        let itemsTotal = 0;
        let prac = 0;

        customerItemArr.map(item => {
            // totalCost += parseInt(item[2]);
            totalCost += item[2] * item[4];
            prac = parseFloat(totalCost.toFixed(2));
            // console.log(prac);
            itemsTotal += item[4];

        });

        $('.totalCost').text('$' + totalCost);
        $('.cart-items').text(itemsTotal); //updates the cart numbers
        $('.cartItem').attr('data-notify', itemsTotal); //setter

    }

    function saveCart(customerItemArr) {
        // console.log(customerItemArr);
        let cartNo = customerItemArr.length;
        console.log(cartNo);
        window.localStorage.setItem('product', JSON.stringify(customerItemArr));
        // localStorage.setItem('product', JSON.stringify(customerItemArr));
        // var totalCost = 0;


        $('.totalCost').text(totalPrice());

        if (!customerItemArr.length > 0) {
            console.log('less than zero');
            alert('Cart Empty');

        }
    }

    $('#contactCheck').click(function () {
        $('#contactModal').modal('open');


        $(document).on('submit', '#contactForm', function (e) {
            e.preventDefault();
            let prdIds = [];
            let quantityId = [];
            customerItemArr.forEach(function (item, index) {
                prdIds.push(item[3])
                quantityId = [...quantityId, item[4]];
                // quantityId = [...quantityId, [
                //     quantity = item[4]
                // ]];
            });

            console.log(prdIds);
            console.log(quantityId);
            $('#contactForm').prepend(
                '<input type="hidden" id="pId" name="productId" value="' + prdIds + '">\
                <input type="hidden" id="quantity" name="quantity" value="' + quantityId + '">'

            )


            var data = {
                'contactName': $('#contactName').val(),
                'contactEmail': $('#contactEmail').val(),
                'contactNumber': $('#contactNumber').val(),
                'contactMessage': $('#contactMessage').val(),
                'productId': $('#pId').val(),
                'quantity': $('#quantity').val(),

            }
            console.log(data);
            let formData = new FormData($('#contactForm')[0]);
            console.log(formData);

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                type: "POST",
                url: "/home",
                data: data,
                success: function (response) {
                    console.log(response);
                    // console.log(removeItem(response.extraInfo));
                    $('#saveErr').html("");
                    $('#saveErr').addClass("red-text");
                    if (response.status == 400) {
                        $.each(response.errors, function (key, errValues) {
                            $('#saveErr').append('<li>' + errValues + '</li>');
                        });
                    } else {
                        $('#saveErr').html("");
                        $('#successMessage').addClass("green white-text");
                        // $('#successMessage').text(response.message);
                        alert(response.message);
                        $('#contactModal').modal('close');
                        $('#contactModal').find('input').val("");
                        // clearCart();
                        let tempId = response.extraInfo;
                        let productId = tempId.toString();
                        console.log(productId);
                        // $('.cartTable').html('');
                        $('.cartTable tbody').empty();
                        // $('.cartTable tbody').html('');
                        customerItemArr.length = 0;
                        window.localStorage.removeItem('product');
                        let i = 0;
                        let result = $('.cart-items').text(i);
                        $('.cartItem').attr('data-notify', i); //setter
                        $('.bag-btn').text('');
                        $('.bag-btn').prop('disabled', false);
                        $('.bag-btn').append('<i class="zmdi zmdi-shopping-cart" style="color: orange;font-size:large"></i>');
                        $('.modalShadow').modal('close');

                        location.reload();
                    }
                }
            });
        });

    });


});

function getCart() {
    // cartButton();
    return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : []; //TINERAY STATEMENT IF/ELSE

}


function cartButton() {
    //the three dots turns d document into an Array
    const buttons = [...document.querySelectorAll(".bag-btn")];
    // const buttons = [...$(".bag-btn")];
    console.log(buttons);
    buttonsDOM = buttons;

    buttons.forEach(button => {
        // let id = button.dataset.id;
        // console.log(id);
        let productId = $(button).attr('data-id');
        // let productId = button.dataset.id;
        console.log(productId);
        //   let configBtn = $(button);
        // console.log(configBtn);
        let inCart = customerItemArr.find(item => item[3] === productId);
        //   let inCart = customerItemArr.find(item => productId === item[3]);
        // let inCart = customerItemArr.find(function (item) {
        //     console.log(item);
        // });
        // console.log(inCart);
        // filter(item => productId !== item[3]);

        let buttonToggle = getSingleButtons(productId);
        if (inCart) {

            buttonToggle.innerText = "In Cart";
            // console.log(inCart);
            // console.log('ok nah');
            // configBtn.removeClass('addToCart').text('In Cart').prop('disabled', true);
            buttonToggle.disabled = true;
        }

        $('.addToCart').click(function (e) {

            e.preventDefault();
            let productId = $(this).attr('data-id');
            configBtn = $(this);
            console.log('es8');
            console.log(productId);
            console.log(configBtn);
            let inCart2 = customerItemArr.find(item => item[3] === productId);
            if (inCart2) {
                alert('in cart')
                buttonToggle.innerText = "In Cart";
                // buttonToggle.removeClass('addToCart').text('In Cart').prop('disabled', true);
                buttonToggle.disabled = true;
            }
        });

    });

}

function getSingleButtons(productId) {

    // return buttonsDOM.find(button => button[3] === customerItemArr);
    return buttonsDOM.find(button => button.dataset.id === productId);

}

function removeItem(productId) {
    console.log(productId);
    customerItemArr = customerItemArr.filter(item => item[3] !== productId);
    // this.setCartValues(customerItemArr);
    // storage.saveCart(customerItemArr);
    let button = getSingleButtons(productId);
    console.log(button);
   
    $(button).text('');
    $(button).prop('disabled', false);
    $(button).append('<i class="zmdi zmdi-shopping-cart" style="color: orange;font-size:large"></i>');

}

document.addEventListener("DOMContentLoaded", () => {
    // setupApp();
    getCart();
    cartButton();

    product = JSON.parse(window.localStorage.getItem('product'));
    console.log(product);
    // $('.cartTable').append('<h2>ddssdsd<h2/>');

});