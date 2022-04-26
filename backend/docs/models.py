from django.db import models


class Docs(models.Model):
    title = models.TextField(null=True,blank=True)
    HTML = models.TextField(null=True,blank=True)
    CSS = models.TextField(null=True,blank=True)
    validate_date = models.DateField(null=True,blank=True)
    posted_date = models.DateField(null=True,blank=True,auto_now_add=True)
    # sections = models.ManyToManyField("DocSection",related_name="document_sections",blank=True)
    product = models.ForeignKey("Product.SubProducts",on_delete=models.CASCADE,null=True,blank=True)

    def __str__(self):
        return self.product.title
        


# class DocsPointImages(models.Model):
#     image = models.FileField(null=True,blank=True)

#     def __str__(self):
#         return self.image.url

# class DocSectionPoints(models.Model):
#     description = models.TextField(max_length=1000,null=True,blank=True)
#     points = models.TextField(null=True,blank=True)

#     def __str__(self):
#         return self.description

# class DocSection(models.Model):
#     title = models.TextField(max_length=500,null=True,blank=True)
#     description = models.TextField(max_length=1000,null=True,blank=True)
#     points = models.ManyToManyField(DocSectionPoints,related_name="doc_points",blank=True)
#     images = models.ManyToManyField(DocsPointImages,related_name="doc_images",blank=True)
    
#     def __str__(self):
#         return self.title