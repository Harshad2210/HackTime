# Generated by Django 3.1 on 2021-11-20 11:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contest', '0008_contest_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='parentComment',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='contest.comment'),
        ),
    ]
