import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  downloadPdf() {
    const pdfPath = 'assets/Resume.pdf'; // Replace with the actual path to your PDF file
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'downloaded-pdf.pdf';
    link.click();
  }

}
