# Generated by Django 5.0.6 on 2024-05-30 08:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacto_app', '0003_category_subscriptionplan'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='category',
            field=models.ManyToManyField(to='contacto_app.category'),
        ),
        migrations.AddField(
            model_name='contact',
            name='owner',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='contacto_app.customuser'),
        ),
        migrations.AlterField(
            model_name='contact',
            name='phonenummber',
            field=models.IntegerField(),
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=50)),
                ('subscription_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contacto_app.subscriptionplan')),
            ],
        ),
    ]