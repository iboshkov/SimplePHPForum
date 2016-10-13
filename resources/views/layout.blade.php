<!DOCTYPE html>
<html ng-app="forums" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Forums - Index</title>
    <script src="/js/app.js" type="text/javascript"></script>
    <link href="/css/app.css" rel="stylesheet" type="text/css"/>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
</head>
<body>
<div class="ui main container">
    <div class="ui attached stackable menu">
        <div class="item">
            <img src="http://boshkov.tech/icons/favicon.png">
        </div>
        <div class="header item">
            Home
        </div>
        <a class="item">
            Members
        </a>

        <div class="ui stackable right menu">
            <div class="item">
                <div class="ui transparent icon input">
                    <input type="text" placeholder="Username">
                    <i class="user icon"></i>
                </div>
            </div>
            <div class="item">
                <div class="ui transparent icon input">
                    <input type="password" placeholder="Password">
                    <i class="lock icon"></i>
                </div>
            </div>
            <a class="ui item">
                <div class="ui button">Sign in</div>
            </a>
        </div>

    </div>

    <div class="ui hidden divider"></div>

    <div class="ui  segment">
        <div class="ui breadcrumb">
            <a class="section">Home</a>
            <div class="divider"> /</div>
            <a class="section">Forum Index</a>
        </div>
    </div>
</div>
<div class="ui hidden divider"></div>
@yield("content")
<div class="ui hidden divider"></div>
<footer>
    Copyright &copy; {{ 2016 }} Ilija Boshkov.
</footer>
</div>


</body>
</html>
