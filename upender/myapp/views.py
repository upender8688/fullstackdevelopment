from django.shortcuts import render
from .models import students
# def mrcet(request):
#     return HttpResponse("Welcome to the MRCET app!")

# def about(request):
#     return HttpResponse("This text is from my app")

def contact(request):
    students_list = students.objects.all()
    return render(request, 'contact.html', {'students_list' : students_list})
def details(request, slug):
    s = students.objects.get(slug=slug)
    return render(request, 'details.html', {'students': s})
