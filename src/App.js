 import './App.css';

 function App() {

     function myfunction() {
         var ele = document.getElementById('topnav');

         if (ele.className === 'navbar') {
             ele.className += ' responsive';
         } else {
             ele.className = 'navbar'
         }
     }


     return ( <
         >



         <
         nav id = 'topnav'
         className = 'navbar' >


         <
         div id = 'logo' >
         logo <
         /div>

         <
         div id = 'right' >
         <
         a href = "#" > Portfolio < /a> <
         a href = "#" > Packages < /a> <
         a href = '#' > How it Works < /a> <
         a href = '#' > About Us < /a> <
         a href = '#' > Login < /a> <
         a href = "callto:07020147576" > < i className = 'fas fa-phone' > < /i> 0720147576 < /a > <
         button > Book A Shoot < i className = 'fas fa-hand-point-up' > < /i> < /button > < /
         div >

         <
         a href = 'javascript:void(0)'
         id = 'bars'
         onClick = { myfunction } > < i className = 'fas fa-bars' > < /i>< /a > < /
         nav >

         <
         />

     );
 }

 export default App;