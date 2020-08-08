<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@stack('styles')

<style>
    body {
        font-family: 'Maven Pro', sans-serif;
        background-color: #e4e4e4;
    }
    .app-logo {
        padding: 0;
        margin: 0;
    }
    nav {
        background-color: #d9e1e8;
    }
    .nav a{
        font-size: 1rem !important;
    }
    .nav a:hover{
        /* color: #194c77 !important; */
        color: #0000ff !important;
    }
    .app-active-link{
        color: #0000ff !important;
    }
    .dropdown-toggle::after {
        transition: transform 0.15s linear; 
    }

    .show.dropdown .dropdown-toggle::after {
        transform: translateY(3px);
    }
</style>
