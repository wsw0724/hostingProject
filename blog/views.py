from django.shortcuts import render , get_object_or_404, redirect
from .models import Comment
from django.utils import timezone
from .forms import CommentForm
from django.contrib.auth.decorators import login_required

def post_about(req):
    return render(req, 'about.html',{})

def post_home(req):
    return render(req, 'home\home.html',{})

def post(req, pk):
    comments = Comment.objects.all().filter(postId=pk)
    print(comments)
    return render(req, 'post\post'+pk+'.html', {'pk':pk,'comments':comments})

def add_comment_to_post(req, pk):
    '''
     if request.method == "POST": #https method 확인
        form = PostForm(request.POST)
        if form.is_valid(): #폼 유효성 확인
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect(post_detail, pk = post.pk)
    else :
        form = PostForm()

    return render(request,'blog\post_edit.html', {'form' : form})
    '''
    if req.method == "POST": #https method 확인
        form = CommentForm(req.POST)
        if form.is_valid(): #폼 유효성 확인
            comment = form.save(commit=False)
            comment.postId = pk
            comment.save()
            return redirect('post', pk=pk)
    else :
        form = CommentForm()

    return render(req, 'add_comment_to_post.html', {'form': form})

@login_required
def comment_approve(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    comment.approve()
    return redirect('post', pk=comment.postId)

@login_required
def comment_remove(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    comment.delete()
    return redirect('post', pk=comment.postId)