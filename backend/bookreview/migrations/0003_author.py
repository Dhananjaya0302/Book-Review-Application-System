# Generated by Django 4.2.5 on 2024-03-30 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookreview', '0002_alter_book_author_delete_author'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
    ]