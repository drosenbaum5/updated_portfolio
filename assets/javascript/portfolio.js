$(document).ready(function(){

// Mobile Responsive Navbar
$('.sidenav').sidenav();

// First card buttons
 $("#button1-git").click(function() {
    window.open("https://github.com/drosenbaum5/AdventureGame", '_blank');
 })
 $("#button1-site").click(function() {
    window.open("https://solarsystemadventure.herokuapp.com/", '_blank');
 })

// Second card buttons 
 $("#button2-git").click(function() {
    window.open("https://github.com/drosenbaum5/HarryPotter", '_blank');
 })

 $("#button2-site").click(function() {
    window.open("https://harrypotter-csd.herokuapp.com", '_blank');
 })
 
//Third card buttons
 $("#button3-git").click(function() {
    window.open("https://github.com/drosenbaum5/destination_podcast", '_blank');
 })

 $("#button3-site").click(function() {
    window.open("https://drosenbaum5.github.io/destination_podcast/", '_blank');
 })
 
// Fourth card buttons
$("#button4-git").click(function() {
    window.open("https://github.com/drosenbaum5/FriendFinder", '_blank');
 })

 $("#button4-site").click(function() {
    window.open("https://polar-peak-64793.herokuapp.com/", '_blank');
 })
})