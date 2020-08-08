@extends('layout.app')

@section('title')
    <title>{{ config('app.name', 'Sportzone') }}</title>
@endsection

@section('content')
<div class="mt-3"></div>
<div class="container-fluid">
    <div class="row pr-2">
        <div class="col-lg-8 col-md-12">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    {{-- <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> --}}
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="{{ asset("images/img_1.jpg") }}" class="d-block w-100 img-fluid" alt="...">
                        <div class="carousel-caption d-none d-md-block home-carousel-text">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="{{ asset("images/img_2.jpg") }}" class="d-block w-100 img-fluid" alt="...">
                        <div class="carousel-caption d-none d-md-block home-carousel-text">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="{{ asset("images/img_3.jpg") }}" class="d-block w-100 img-fluid" alt="...">
                        <div class="carousel-caption d-none d-md-block home-carousel-text">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="{{ asset("images/img_4.jpg") }}" class="d-block w-100 img-fluid" alt="...">
                        <div class="carousel-caption d-none d-md-block home-carousel-text">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 recent-scores">
            <div class="container p-3">
                <div class="row">
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="Barcelonia Logo" height="40"></div>
                    <div class="col d-flex justify-content-center">Barcelonia</div>
                    <div class="col d-flex justify-content-center">VS</div>
                    <div class="col d-flex justify-content-center">Napoli</div>
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png" alt="Napoli Logo" height="40"></div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">3</div>
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">2</div>
                    <div class="col d-flex justify-content-center"></div>
                </div>
                <hr class="hr" />
            </div>
            <div class="container p-3">
                <div class="row">
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="Barcelonia Logo" height="40"></div>
                    <div class="col d-flex justify-content-center">Barcelonia</div>
                    <div class="col d-flex justify-content-center">VS</div>
                    <div class="col d-flex justify-content-center">Napoli</div>
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png" alt="Napoli Logo" height="40"></div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">3</div>
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">2</div>
                    <div class="col d-flex justify-content-center"></div>
                </div>
                <hr class="hr" />
            </div>
            <div class="container p-3">
                <div class="row">
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="Barcelonia Logo" height="40"></div>
                    <div class="col d-flex justify-content-center">Barcelonia</div>
                    <div class="col d-flex justify-content-center">VS</div>
                    <div class="col d-flex justify-content-center">Napoli</div>
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png" alt="Napoli Logo" height="40"></div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">3</div>
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">2</div>
                    <div class="col d-flex justify-content-center"></div>
                </div>
                <hr class="hr" />
            </div>
            <div class="container p-3">
                <div class="row">
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="Barcelonia Logo" height="40"></div>
                    <div class="col d-flex justify-content-center">Barcelonia</div>
                    <div class="col d-flex justify-content-center">VS</div>
                    <div class="col d-flex justify-content-center">Napoli</div>
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png" alt="Napoli Logo" height="40"></div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">3</div>
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">2</div>
                    <div class="col d-flex justify-content-center"></div>
                </div>
                <hr class="hr" />
            </div>
            <div class="container p-3">
                <div class="row">
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="Barcelonia Logo" height="40"></div>
                    <div class="col d-flex justify-content-center">Barcelonia</div>
                    <div class="col d-flex justify-content-center">VS</div>
                    <div class="col d-flex justify-content-center">Napoli</div>
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png" alt="Napoli Logo" height="40"></div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">3</div>
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">2</div>
                    <div class="col d-flex justify-content-center"></div>
                </div>
                <hr class="hr" />
            </div>
            <div class="container p-3">
                <div class="row">
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png" alt="Barcelonia Logo" height="40"></div>
                    <div class="col d-flex justify-content-center">Barcelonia</div>
                    <div class="col d-flex justify-content-center">VS</div>
                    <div class="col d-flex justify-content-center">Napoli</div>
                    <div class="col d-flex justify-content-center"><img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png" alt="Napoli Logo" height="40"></div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">3</div>
                    <div class="col d-flex justify-content-center"></div>
                    <div class="col d-flex justify-content-center">2</div>
                    <div class="col d-flex justify-content-center"></div>
                </div>
                <hr class="hr" />
            </div>
        </div>
    </div>
</div>
@endsection

@push('styles')
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
@endpush

@push('scripts')
    <script type="text/javascript">
        $(document).ready(function() {
            currentHeight = $('.slide').outerHeight();
            $('.recent-scores').outerHeight(currentHeight);
        });
        $(window).resize(function() {
            currentHeight = $('.slide').outerHeight();
            $('.recent-scores').outerHeight(currentHeight);
        });
    </script>
@endpush