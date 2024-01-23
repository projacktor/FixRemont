from django.shortcuts import render

def index(request):
    """ Function loading index page """
    context = {"current_user": request.user}
    return render(request, "index.html", context)