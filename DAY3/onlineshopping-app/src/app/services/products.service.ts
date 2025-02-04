import { ProductModel } from "../models/product.model";

export class ProductService {
  listofproducts: ProductModel[] = [
    {
      id: 1,
      title: 'Laptop',
      price: 100000,
      rating: 5,
      likes: 300,
      imageUrl:
        'https://media.wired.com/photos/64daad6b4a854832b16fd3bc/16:9/w_2400,h_1350,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: 'OLED TV',
      price: 80000,
      rating: 4,
      likes: 500,
      imageUrl:
        'https://cdn.thewirecutter.com/wp-content/media/2023/08/oledtv-2048px-2002-3x2-1.jpg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      title: 'LED TV',
      price: 50000,
      rating: 5,
      likes: 300,
      imageUrl:
        'https://www.cnet.com/a/img/resize/b4c8af21865f37260b816ba2c7bd4680f8b66b53/hub/2022/03/31/3a8d6e23-59d3-46eb-9d3d-a05d68bb3dc7/s95b-lifestyle-02.jpg?auto=webp&fit=crop&height=675&width=1200',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      title: 'QLED TV',
      price: 100000,
      rating: 3,
      likes: 200,
      imageUrl:
        'https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled42c2psa_atr_eail_in_c/gallery/OLED42C2PSA-D-01-V.jpg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      title: 'Camera',
      price: 100000,
      rating: 5,
      likes: 100,
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/Ekc54rx2YMgRt5ycD5KYf5.jpg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
}