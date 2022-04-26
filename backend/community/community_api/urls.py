from django.urls import path
from .views import *

urlpatterns = [
    path("tutorials/",tutorials_view,name="tutorials"),
    path("searchtutorials/",search_tutorials_view,name="search_tutorials"),
    path("question/",question_view,name="question"),
    path("searchquestion/",search_question_view,name="search_question"),
    path("answer/",answer_view,name="answer_view"),
    path("comment/",comments_view,name="comment_view"),
]


