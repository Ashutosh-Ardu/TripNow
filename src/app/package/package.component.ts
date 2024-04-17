import { Component } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss'
})
export class PackageComponent {

  boxes = [
    {
      id: "mysore-day-out",
      imageUrl: '../../assets/images/a-1.jpg',
      title: '(Mysuru) Mysore Day Out - A Royal Experience Private Tour from Bangalore',
      likes: 148
    },
    {
      id: 2,
      imageUrl: '../../assets/images/a-2.jpg',
      title: 'The Best of Mysore/Mysuru, Somnathpur & Srirangapatna in a Day',
      likes: 240
    },

    {
      id: 3,
      imageUrl: '../../assets/images/a-3.jpg',
      title: 'Royal Mysore tour from Bangalore in private car with guide and lunch',
      likes: 129
    },

    {
      id: 4,
      imageUrl: '../../assets/images/a-4.jpg',
      title: 'Bangalore city tour with a guide in private car and lunch',
      likes: 80
    },

    {
      imageUrl: '../../assets/images/a-5.jpg',
      title: 'Taj Mahal sunrise and Agra Overnight Tour from Bangalore',
      likes: 14,
      price: 'from ₹51,267 per adult'
    },
    {
      imageUrl: '../../assets/images/a-6.jpg',
      title: 'Tipu Palace + Koté Vishnu + Fort + KR Market + Jain Temple = Bengaluru Pété Walk',
      likes: 60,
      price: 'from ₹3,000 per adult'
    },

    {
      imageUrl: '../../assets/images/a-7.jpg',
      title: 'Bangalore Through the Ages - Full-Day Tour with Lunch',
      likes: 284,
      price: 'from ₹10,026 per adult'
    },

    {
      imageUrl: '../../assets/images/a-8.jpg',
      title: 'Full Day Private tour of Mysore from Bangalore with pick up and drop-off',
      likes: 48,
      price: 'from ₹8,801 per adult'
    }
  ];

  // boxes1 = [
  //   {
  //     imageUrl: '../../assets/images/a-5.jpg',
  //     title: 'Taj Mahal sunrise and Agra Overnight Tour from Bangalore',
  //     likes: 14,
  //     price: 'from ₹51,267 per adult'
  //   },
  //   {
  //     imageUrl: '../../assets/images/a-6.jpg',
  //     title: 'Tipu Palace + Koté Vishnu + Fort + KR Market + Jain Temple = Bengaluru Pété Walk',
  //     likes: 60,
  //     price: 'from ₹3,000 per adult'
  //   },

  //   {
  //     imageUrl: '../../assets/images/a-7.jpg',
  //     title: 'Bangalore Through the Ages - Full-Day Tour with Lunch',
  //     likes: 284,
  //     price: 'from ₹10,026 per adult'
  //   },

  //   {
  //     imageUrl: '../../assets/images/a-8.jpg',
  //     title: 'Full Day Private tour of Mysore from Bangalore with pick up and drop-off',
  //     likes: 48,
  //     price: 'from ₹8,801 per adult'
  //   }
  // ];

  boxes2 = [
    {
      imageUrl: '../../assets/images/a-9.jpg',
      title: 'Rambagh Palace',
      likes: '6,964'
    },
    {
      imageUrl: '../../assets/images/a-10.jpg',
      title: 'Ozen Reserve Bolifushi - Luxury All Inclusive',
      likes: "2,647"
    },

    {
      imageUrl: '../../assets/images/a-11.jpg',
      title: 'Hotel Colline de France',
      likes: '4,229'
    },

    {
      imageUrl: '../../assets/images/a-12.jpg',
      title: 'Full Day Private tour of Mysore from Bangalore with pick up and drop-off',
      likes: '7,278'
    }

  ];

  boxes3 = [
    {
      imageUrl: '../../assets/images/a-13.jpg',
      title: 'Ikos Dassia',
      likes: '3,667'
    },
    {
      imageUrl: '../../assets/images/a-14.jpg',
      title: 'Rixos Premium Belek - The Land Of Legends Access',
      likes: "10,799"
    },

    {
      imageUrl: '../../assets/images/a-15.jpg',
      title: 'Voyage Sorgun',
      likes: '8,651'
    },

    {
      imageUrl: '../../assets/images/a-16.jpg',
      title: 'Voyage Belek Golf And Spa',
      likes: '13,615'
    }
  ];

  filteredBoxes: any[] = [];
  filterText: string = '';

  ngOnInit() {
    this.filteredBoxes = this.boxes;
  }

  filterBoxes() {
    this.filteredBoxes = this.boxes.filter(box =>
      box.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
