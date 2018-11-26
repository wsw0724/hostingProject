from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.post_home, name='post_home'),
    url(r'^about', views.post_about, name='post_about'),
    url(r'^post(?P<pk>\d+)$', views.post, name='post'),
    url(r'^post(?P<pk>\d+)/comment/$', views.add_comment_to_post, name='add_comment_to_post'),
    url(r'^comment/(?P<pk>\d+)/approve/$', views.comment_approve, name='comment_approve'),
    url(r'^comment/(?P<pk>\d+)/remove/$', views.comment_remove, name='comment_remove'),
]
