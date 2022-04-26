from rest_framework import serializers
from community.models import *
from accounts.serializers import UserSerializer



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class StepsContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StepsContent
        fields = '__all__'

class StepsSerializer(serializers.ModelSerializer):
    content = StepsContentSerializer(read_only=True)

    class Meta:
        model = Steps
        fields = '__all__'

class AnswersSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Answers
        fields = '__all__'

class CommentsSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Comments
        fields = '__all__'

class QuestionsSerializer(serializers.ModelSerializer):
    answers = AnswersSerializer(read_only=True,many=True)
    comments = CommentsSerializer(read_only=True,many=True)
    category = CategorySerializer(read_only=True,many=True)
    class Meta:
        model = Questions
        fields = '__all__'

class TutorialsSerializer(serializers.ModelSerializer):
    steps = StepsSerializer(read_only=True,many=True)
    category = CategorySerializer(read_only=True,many=True)

    class Meta:
        model = Tutorials
        fields = '__all__'