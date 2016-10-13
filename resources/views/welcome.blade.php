<!DOCTYPE html>
<html ng-app="forums" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Forums - Index</title>
    <script src="js/app.js" type="text/javascript"></script>
    <link href="css/app.css" rel="stylesheet" type="text/css"/>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
</head>
<body>
<div class="ui container">
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

        <div class="right menu">
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
    <div ng-controller="ForumsController as cont" class="ui basic segment">
        <div ng-repeat="category in cont.forums" class="ui segments">
            <div class="ui inverted segment category-title">
                <p><a href="#">@{{ category.title }}</a></p>
            </div>

            <div ng-repeat="forum in category.subForums" class="ui segment">
                <div class="ui divided items">
                    <div class="item">
                        <div class="content">
                            <div class="left floated" style="margin-right: 10px">
                                <i class="huge comments outline icon"></i>
                            </div>
                            <div class="header"><a href="">@{{ forum.title }}</a></div>
                            <div class="description">
                                <div class="ui grid ">
                                    <div class="ten wide column">@{{ forum.description | limitTo:10 }}</div>
                                    <div class="large screen only right floated left aligned six wide column">
                                        <div class="ui segment">
                                            Latest:
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="meta">
                                <span class="discussions"><i class="chat icon"></i> @{{ forum.threads }}</span>
                                <span class="messages"><i class="mail icon"></i> @{{ forum.posts }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="ui basic segment">
        <div class="ui mini statistics">
            <div class="statistic">
                <div class="value">
                    <i class="users icon"></i> 242
                </div>
                <div class="label">
                    Members
                </div>
            </div>
            <div class="statistic">
                <div class="value">
                    <i class="comments icon"></i> 242
                </div>
                <div class="label">
                    Topics
                </div>
            </div>
            <div class="statistic">
                <div class="value">
                    <i class="mail icon"></i> 242
                </div>
                <div class="label">
                    Posts
                </div>
            </div>
        </div>
    </div>
    <div id="target">

    </div>
    <footer>
        Copyright &copy; {{ 2016 }} Ilija Boshkov.
    </footer>
</div>


</body>
</html>
