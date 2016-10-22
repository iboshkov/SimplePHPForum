<!DOCTYPE html>
<html ng-app="forums" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.quilljs.com/1.1.0/quill.snow.css" rel="stylesheet">
    <title>Forums - Index</title>

    <script src="/js/app.js" type="text/javascript"></script>
    <link href="/css/app.css" rel="stylesheet" type="text/css"/>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
</head>
<body>
<div class="ui main container">
    <div class="ui inverted attached stackable menu">
        <div class="item">
            <img src="http://boshkov.tech/icons/favicon.png">
        </div>
        <a href="/" class="active red item">
            Home
        </a>
        <a href="/members" class="item">
            Members
        </a>
        <form ng-cloak name="LoginForm" ng-controller="LoginController as loginCtrl" ng-submit="loginCtrl.tryLogin()" class="ui stackable right inverted menu">
            <div ng-if="!loggedIn()" class="ui stackable right inverted menu">
                <div class="item">
                    <div class="ui transparent icon inverted input">
                        <input ng-model="loginCtrl.user.username" type="text" placeholder="Username">
                        <i class="user icon"></i>
                    </div>
                </div>
                <div class="item">
                    <div class="ui transparent icon inverted input">
                        <input ng-model="loginCtrl.user.password" type="password" placeholder="Password">
                        <i class="lock icon"></i>
                    </div>
                </div>
                <div class="ui item">
                    <button type="submit" class="ui red button">Sign in</button>
                </div>
            </div>
            <div ng-cloak ng-if="loggedIn()" class="ui inverted stackable right menu">
                <a href="#" class="ui item">Welcome, @{{loggedInUser.username}}</a>
                <a href="#" class="ui item" ng-click="loginCtrl.logOut()" >Log out</a>
            </div>
        </form>

    </div>

    <div class="ui hidden divider"></div>
    <breadcrumbs path="breadcrumbPath"></breadcrumbs>
</div>
<div class="ui hidden divider"></div>
<div class="ui container">
    <div style="min-height: 400px!important;"  ng-show="::false" class="ui loading segment">

    </div>
</div>

@yield("content")


<div class="ui hidden clearing divider"></div>
<div class="ui container">
<footer>
    Copyright &copy; {{ 2016 }} Ilija Boshkov.
</footer>
</div>


</body>
</html>
