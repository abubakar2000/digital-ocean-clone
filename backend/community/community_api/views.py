from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from community.models import *
from .serializers import *
from rest_framework.authtoken.models import Token



@api_view(['GET'])
def tutorials_view(request):
    if request.method == 'GET':
        tutorial_id = request.GET.get("tutorial_id",None)
        if tutorial_id is not None:
            tutorials = Tutorials.objects.filter(id=tutorial_id)
        else:
            tutorials = Tutorials.objects.all()

        serializer = TutorialsSerializer(instance=tutorials,many=True)
        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)

@api_view(['GET'])
def search_tutorials_view(request):
    if request.method == 'GET':
        search_params = request.GET.get("search_params","")
        tutorials = Tutorials.objects.filter(title__startswith=search_params)
        serializer = TutorialsSerializer(instance=tutorials,many=True)
        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)

@api_view(['GET'])
def question_view(request):
    if request.method == 'GET':
        question_id = request.GET.get("question_id",None)
        if question_id is not None:
            questions = Questions.objects.filter(id=question_id)
        else:
            questions = Questions.objects.all()

        serializer = QuestionsSerializer(instance=questions,many=True)
        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)

@api_view(['GET'])
def search_question_view(request):
    if request.method == 'GET':
        search_params = request.GET.get("search_params","")
        question = Questions.objects.filter(title__startswith=search_params)
        serializer = QuestionsSerializer(instance=question,many=True)
        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)

@api_view(['POST','PUT',"DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def answer_view(request):
    if request.method == 'POST':
        question_id = request.POST.get("question_id",None)
        answer = request.POST.get("answer",None)

        if question_id is None:
            data = {
            "status":"error",
            "message":"question_id is required!",
        }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        if answer is None:
            data = {
            "status":"error",
            "message":"answer is required!",
        }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        user = Token.objects.get(key=request.auth.key).user

        question = Questions.objects.get(id=question_id)

        answer = Answers.objects.create(answer=answer,user=user)

        question.answers.add(answer)

        serializer = AnswersSerializer(instance=answer)

        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)
    if request.method == 'PUT':
        answer_id = request.POST.get("answer_id",None)
        answer = request.POST.get("answer",None)

        if answer_id is None:
            data = {
            "status":"ok",
            "message":"answer_id is required!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        if answer is None:
            data = {
            "status":"ok",
            "message":"answer is required!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)

        answer_obj = Answers.objects.get(id=answer_id)
        answer_obj.answer=answer
        answer_obj.verified=False
        answer_obj.save()
        serializer = AnswersSerializer(instance=answer_obj)

        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)
    if request.method == 'DELETE':
        answer_id = request.POST.get("answer_id",None)

        if answer_id is None:
            data = {
            "status":"ok",
            "message":"answer_id is required!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        try:
            answer_obj = Answers.objects.get(id=answer_id)
        except:
            data = {
            "status":"ok",
            "message":"invalid id!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        answer_obj.delete()
        data = {
            "status":"ok",
            "message":"successfull!"
        }
        return Response(data=data,status=status.HTTP_301_MOVED_PERMANENTLY)


@api_view(['POST','PUT',"DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def comments_view(request):
    if request.method == 'POST':
        question_id = request.POST.get("question_id",None)
        comment = request.POST.get("comment",None)

        if question_id is None:
            data = {
            "status":"error",
            "message":"question_id is required!",
        }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        if comment is None:
            data = {
            "status":"error",
            "message":"comment is required!",
        }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        user = Token.objects.get(key=request.auth.key).user

        question = Questions.objects.get(id=question_id)

        comments = Comments.objects.create(comment=comment,user=user)

        question.comments.add(comments)

        serializer = CommentsSerializer(instance=comments)

        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)
    if request.method == 'PUT':
        comments_id = request.POST.get("comment_id",None)
        comment = request.POST.get("comment",None)

        if comments_id is None:
            data = {
            "status":"ok",
            "message":"comments_id is required!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        if comment is None:
            data = {
            "status":"ok",
            "message":"Comment is required!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)

        comments_obj = Comments.objects.get(id=comments_id)
        comments_obj.comment=comment
        comments_obj.save()
        serializer = CommentsSerializer(instance=comments_obj)

        data = {
            "status":"ok",
            "message":"successfull!",
            "data":serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)
    if request.method == 'DELETE':
        comments_id = request.POST.get("comments_id",None)

        if comments_id is None:
            data = {
            "status":"ok",
            "message":"comments_id is required!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        try:
            comments_obj = Comments.objects.get(id=comments_id)
        except:
            data = {
            "status":"ok",
            "message":"invalid id!"
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        comments_obj.delete()
        data = {
            "status":"ok",
            "message":"successfull!"
        }
        return Response(data=data,status=status.HTTP_301_MOVED_PERMANENTLY)