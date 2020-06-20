<nav class="navbar navbar-expand-lg navbar-light bg-light rounded nav">
    <a class="navbar-brand app-logo" href="/"><img width="180px" src="{{ asset("images/logo_outline.png") }}" alt="Sportzone Logo"></a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>  
    <div class="navbar-collapse collapse" id="navbarsExample09" style="">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav my-2 my-md-0">
            <li class="nav-item">
                <a class="nav-link {{ (\Request::route()->getName() == 'news') ? 'app-active-link' : '' }}" href="{{ route("news") }}">News</a>
            </li>
            {{-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/teams" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Teams</a>
                <div class="dropdown-menu" aria-nav-item dropdownlabelledby="dropdown05">
                    <a class="dropdown-item" href="#">Team 1</a>
                    <a class="dropdown-item" href="#">Team 2</a>
                    <a class="dropdown-item" href="#">Team 3</a>
                    <a class="dropdown-item" href="#">Sea all</a>
                </div>
            </li> --}}
            <li class="nav-item">
                <a class="nav-link {{ (\Request::route()->getName() == 'teams') ? 'app-active-link' : '' }}" href="{{ route("teams") }}">Teams</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ (\Request::route()->getName() == 'leagues') ? 'app-active-link' : '' }}" href="{{ route("leagues") }}">Leagues</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ (\Request::route()->getName() == 'fixtures') ? 'app-active-link' : '' }}" href="{{ route("fixtures") }}">Fixtures</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ (\Request::route()->getName() == 'videos') ? 'app-active-link' : '' }}" href="{{ route("videos") }}">Videos</a>
            </li>
        </ul>
    </div>
</nav>

{{-- class="{{ (\Request::route()->getName() == '/') ? 'active-menu bold-text orange-text' : '' }} nav-item small-text" --}}