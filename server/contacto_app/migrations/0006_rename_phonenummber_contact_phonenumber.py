# Generated by Django 5.0.6 on 2024-05-31 13:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacto_app', '0005_alter_userprofile_subscription_plan_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='phonenummber',
            new_name='phonenumber',
        ),
    ]
