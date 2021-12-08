
const app = Vue.createApp({
    data() {
        return {
            firstName: 'Daulet',
            lastName: 'Lepessov',
            email: 'findMeIfYouCan@stu.sdu.edu.kz',
            picture: 'images/icon4.png',
            thought: '"-IF YOU NEVER TRY YOU WILL NEVER KNOW"',
            status: false,
            number: '8777111333111',
            // project1
            introduction: 'Hello, my name is Daulet Lepessov',
            project_1: 'images/Project_1.png',
            title_1: 'World of Tanks',
            comment_1: 'World of Tanks is an epic online multiplayer game featuring authentic tanks from the mid-20th century. Take control of steel beasts and battle through historic locations where strategy means victory.',
            notActive: false,
            // project2
            project_2: 'images/Project_2.jpg',
            title_2: 'Ustem robotics',
            comment_2: 'World of Tanks is an epic online multiplayer game featuring authentic tanks from the mid-20th century. Take control of steel beasts and battle through historic locations where strategy means victory.',
            // project3
            project_3: 'images/Project_3.png',
            title_3: 'Web project',
            comment_3: 'World of Tanks is an epic online multiplayer game featuring authentic tanks from the mid-20th century. Take control of steel beasts and battle through historic locations where strategy means victory.',
            
        }
    },
    el: '#events',
    mounted()  {
    
        
            $(".button").click(function() {
                $('html,body').animate({
                    scrollTop: $(".thoughts").offset().top},
                    'slow');
            })
            
            $(".button2").click(function() {
                $('html,body').animate({
                    scrollTop: $(".projects").offset().top},
                    'slow');
            })
        },
    
})
app.mount('#app')


