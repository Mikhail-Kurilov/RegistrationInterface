# RegistrationInterface
User can Registrate, Authorize and Logout. His data will be validated and added into a localstorage.

#API
The Structure of interface inside src folder consists of: assets, components, pages, routes and ui-kit folders.
Were added two files with interface samples and custom config for Img component.
App renders route pathes and set default state.
Inside components only a header with simple logic which contain two buttons and greetengs.
Pages has Two main elements - Registration and Authorization and two pages without logic.
Ui-kit is a folder with custom components(Input, Button, Form, Img)

##Components
Registration;
Authorization;

###Registration 
It uses two inner components Form and Button.
It contains: Nickname, email, password and password confiramtion.

###Authorization
It uses Form and Button eigther.
It contains Nickname or email (User can choose what he wants), toggle-button and password.

##InnerComponents
Input;
Button;
Form;
Img;

###Input
Custom Input field with Forwardref

###Button
Custom Button which coul be desabled

###Img
Custom Img component with types and random keys to simplifize further using

###Form
It uses two nner components Input and Icon
Form renders text and password inputs

#Technologies
Project was written on a Typescript and routing.
This auxillary libraries were installed:
Scss, hookform, yup, classnames, uuid.

