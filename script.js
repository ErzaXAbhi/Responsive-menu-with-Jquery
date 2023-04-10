// // $('h1').hide();

// $(document).ready(function () {
//   //You jquery code here

//   console.log("We are using Jquery!.");

// //   $("p").click(function () {
// //     console.log("You have double clicked on P.", this);
// //   });

// // $("p").hover(function() {
// //     console.log("You hover:");
// //     });

//   // Events in JQ

//   //1. Mouse events = click, dblclick, mouseenter, mouseleave
//   //2. keyboardEvent = keypress, keydown, mediaKeyStatusMap
//   //3. form events = submit, change, focus, blur
//   //4. document/window events = load, resize, scroll, unload
// });

// // There are three main types of selectors in JQ

// //1. element selector

// // Jquery syntax looks like this
// // #('selector').action()

// // This is an example of element selector which clicks on all p

// // $('p').click();

// //2. id selector

// // This is an example of an ID selector

// // $('#second').click();

// //3. class selector

// // $('.second').click();

// // Others selectors

// // $('*').click(); // Click on the all the element.
// // $('p.odd').click(); // Click on the all the element.
// // $('*').click(); // Click on the all the element.

// // Demoing the on method

// // $("p").on(
    
// //     {
// //         click: function() {
// //     console.log("Thanks for clicking this,", this);
// // },

// //     mouseleave: function() {
// //         console.log(mouseleave);
// //     }
// //     });

// //     $('#wiki').hide(1000, function() {
// //         console.log('Hidden.')
// //     });

// //     $('#wiki').show(1000, function() {
// //         console.log('Show.')
// //     });

// //  $('#but').click(function() {
// //     $('#wiki').fadeOut(1000)
// //  })

// //  $('#but').click(function() {
// //     $('#wiki').fadeIn(5000)
// //  })

//  // fadIn() fadeOut() 
 
//  // fadeToggle() fadeTo()

// // Slide methods - speed and callback functions are optionals.

// //  $('#wiki').slideUp(1000, function() {
// //     console.log('done.')
// //  });

// //  $('#wiki').slideDown(1000);

// //  $('#wiki').slideToggle(1000);


// // Animate function in Jquery
// // $('#wiki').animate({height: '150px', width: '450px'}, 1000);

// $('#wiki').css('background-color', 'red')


// $('h1#heading1').hide();
// $('.heading2').hide();

// $('p span').css('color', 'orange');

// $('ul#list li:first').css('color', 'red');
// $('ul#list li:even').css('background-color', 'yellow');
// $('ul#list li:odd').css('background-color', '#fff');
// $('ul#list li:nth-child(3n)').css('list-style', 'none');

// $(':submit').hide();

// $('[href]').css('color', 'red');
// $('a[href="http://yahoo.com"]').css('color', 'green');
// $('*').hide();

// Mouse Events
$(document).ready(function(){
    // $('#btn1').click(function() {
    //     alert('Button Clicked!')
    // })

    // $('#btn1').click(function(e) {
    //     // alert(e.currentTarget.id)
    //     // alert(e.currentTarget.innerHTML)
    //     // alert(e.currentTarget.outerHTML)
    //     alert(e.currentTarget.className)
    //     // alert(e.currentTarget.id)
    // })

    // $('#btn1').on('click', function() {
    //     $('.para1').hide();
    // })

    // $('#btn1').on('click', function() {
    //     $('.para1').toggle();
    // })

    // $('#btn2').on('click', function() {
    //     $('.para1').show();
    // })

    // $('#btn1').dblclick(function() {
    //     $('.para1').toggle();
    // })

    // $('#btn1').hover(function() {
    //     $('.para1').hide();
    // })

    // $('#btn2').hover(function() {
    //     $('.para1').show();
    // })

    //   $('#btn1').on('mousedown', function() {
    //     $('.para1').toggle();
    // })

    //   $('#btn1').on('mouseup', function() {
    //     $('.para1').toggle();
    // })

    //   $('#btn1').on('mousedown', function() {
    //     $('.para1').toggle();
    // })

    //   $('#btn1').on('mouseleave', function() {
    //     $('.para1').toggle();
    // })

    // $(document).on('mousemove', function(e) {
    //     $('#coords').html('Cooreds: Y: '+e.clientY+' X: '+e.clientX)
    // })

    // $('input').focus(function() {
    //     // alert('Focus');
    //     $(this).css('background', 'pink')
    // })

    // $('input').blur(function() {
    //     // alert('Focus');
    //     $(this).css('background', 'white')
    // })


    // $('input').keyup(function(e) {
    //     console.log(e.target.value)
    // })

    // $('select#gender').change(function() {
    //         alert('changed!')
    // })

    // $('#form').submit(function(e) {
    //     e.preventDefault();
    //     console.log('submitted!')
    // })

    // DOM Manipulation

    // $('p.para1').css({color : "red", background: "#ccc"});

    // $('p.para2').addClass('myClass');
    
    // $('#btn1').click(function() {
    //     $('p.para2').toggleClass('myClass');
    // })

    // $('#myDiv').html('<h3>Hello world.</h3>')

    // $('ul').append('<li>Append List Item</li>')
    // $('ul').prepend('<li>Prepend List Item</li>')

    // $('.para1').appendTo('.para2')
    // $('.para1').prependTo('.para2')

    // $('ul').before('<h4>Hello</h4>')
    // $('ul').after('<h4>World</h4>')

    // // $('ul').empty();
    // // $('ul').detach();

    // $('a').attr('target', '_blank')
    // $('a').removeAttr('target')

    // $('p').wrap('<h1>')
    // $('p').wrapAll('<h1>')

    // $('#newItem').keyup(function(e) {
    //     var code = e.which;
    //     if(code == 13) {
    //         e.preventDefault();
    //         $('ul').append('<li>'+e.target.value+'<li>')
    //     }
    // })

    // // var myArr = ['Abhi', 'Maur', 'Nutan', 'Divya']

    // // $.each(myArr, function(i, val) {
    // //     $('#users').append('<li>'+val+'</li>')
    // // })

    // var newArr = $('ul#list li').toArray();
    // $.each(newArr, function(i, val) {
    //        console.log(val.innerHTML)
    //     })

    $('#btnSlideUp').click(function() {
        $('#box').slideUp(1000) 
    })

    $('#btnSlideDown').click(function() {
        $('#box').slideDown(1000) 
    })

    $('#btnSlideTog').click(function() {
        $('#box').slideToggle(1000) 
    })

    $('#stop').click(function() {
        $('#box').stop();
    })

    $('#moveRight').click(function() {
        $('#box2').animate({
            left: 400,
            height: '200px',
            width: '200px',
            opacity: '0.5'
        })
    })
    $('#moveLeft').click(function() {
        $('#box2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '1'
        })
    })


    // $('#moveAround').click(function() {
    //  var box = $('#box2');
    //  box.animate({
    //     left: 300
    //  })
    //  box.animate({
    //     top: 300
    //  })
    //  box.animate({
    //     left: 0,
    //     top: 300
    //  })
    //  box.animate({
    //     left: 0,
    //     top: 0
    //  })
    // })

    $(".menu-toggle-btn").click(function(){
        $(this).toggleClass("fa-times");
        $(".navigation-menu").toggleClass("active");
      });
})




