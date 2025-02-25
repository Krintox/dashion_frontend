import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type ClothingItemFormProps = {
  onSubmit: (formData: FormData) => void;
  existingImages?: { url: string; altText: string }[];
};

const ClothingItemForm = ({ onSubmit, existingImages = [] }: ClothingItemFormProps) => {
  // const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // setSelectedFiles(files);
      const urls = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Add/Edit Clothing Item</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Item Name</Label>
            <Input id="name" name="name" required />
          </div>
          
          <div>
            <Label htmlFor="price">Selling Price</Label>
            <Input 
              id="price" 
              name="price" 
              type="number" 
              min="0" 
              step="0.01" 
              required 
            />
          </div>
          
          <div>
            <Label htmlFor="manufacturerPrice">Manufacturer Price</Label>
            <Input 
              id="manufacturerPrice" 
              name="manufacturerPrice" 
              type="number" 
              min="0" 
              step="0.01" 
              required 
            />
          </div>
          
          <div>
            <Label htmlFor="clothType">Cloth Type</Label>
            <Input 
              id="clothType" 
              name="clothType" 
              required 
              placeholder="e.g., Cotton, Polyester, etc." 
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <textarea 
              id="description" 
              name="description" 
              className="w-full min-h-[100px] p-2 border rounded" 
            />
          </div>
          
          <div>
            <Label htmlFor="images">Product Images</Label>
            <Input 
              id="images" 
              name="images" 
              type="file" 
              multiple 
              accept="image/*" 
              onChange={handleFileChange}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {existingImages.map((img, index) => (
              <AspectRatio key={`existing-${index}`} ratio={1}>
                <img 
                  src={img.url} 
                  alt={img.altText} 
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
            ))}
            {previewUrls.map((url, index) => (
              <AspectRatio key={`preview-${index}`} ratio={1}>
                <img 
                  src={url} 
                  alt={`Preview ${index + 1}`} 
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
            ))}
          </div>

          <Button type="submit" className="w-full">
            Save Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ClothingItemForm;