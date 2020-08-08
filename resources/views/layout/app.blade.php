<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.head')
        @yield('title')
        {{-- CSS --}}
        @include('partials.style')
    </head>
    <body>
        <header>
            @include('partials.navbar')
        </header>
        <main id="app">
            @yield('content')
        </main>
        <footer>
            @include('partials.footer')
        </footer>
        {{-- JS --}}
        @include('partials.scripts')
    </body>
</html>
