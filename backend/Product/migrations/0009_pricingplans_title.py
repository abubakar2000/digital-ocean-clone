# Generated by Django 4.0.3 on 2022-04-22 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0008_rename_subproducts_products_sub_products'),
    ]

    operations = [
        migrations.AddField(
            model_name='pricingplans',
            name='title',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
