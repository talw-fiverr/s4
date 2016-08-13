require('../style/style.scss');

import React, { Component } from 'react';
import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Groups from      '../components/Groups';
import Search from      '../components/Search';
import Footer from      '../components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {
          description: 'קבוצה זו עוסקת בספורט אתגרי, אם אתה תחרותי ומחפש אתגרים מקומך איתנו',
          groupName: 'הדולפינים',
          groupMoto: 'כל דבר אפשרי אם מאמינים',
          sportType: 'swimming',
          rating: 5,
          id: '1'
        },
        {
          description: 'קבוצת חזרה לכושר',
          groupName: 'האריות',
          groupMoto: 'אין דבר העומד בפני הרצון',
          sportType: 'running',
          rating: 2,
          id: '2'
        },
        {
          description: 'כדורגל של אלופיםת תחרויות ומדליות',
          groupName: 'הפועל חיפה',
          groupMoto: 'מתחילים חזק ומגבירים',
          sportType: 'soccer',
          rating: 1,
          id: '3'
        },
        {
          description: 'כדורסל ליגה ב נערים',
          groupName: 'מכבי תל אביב',
          groupMoto: 'כדורסל של אלופים',
          sportType: 'basketball',
          rating: 0,
          id: '4'
        },
        {
          description: 'פילאטיס לגוף ולנשמה',
          groupName: 'שלווה ורוגע',
          groupMoto: 'לכל אחד יש שלווה פנימית',
          sportType: 'pilatis',
          rating: 5,
          id: '5'
        },
        {
          description: 'קבוצת יוגה להפגת המתח הנפשי ושחרור הגוף, מעודד את המערכת החיסונית ומחזק את הנפש',
          groupName: 'העין השלישית',
          groupMoto: 'מקשיבים לשקט',
          sportType: 'yoga',
          rating: 3,
          id: '6'
        },
        {
          description: 'הרמת משקולות ופיתוח הגוף',
          groupName: 'כוח מתפרץ',
          groupMoto: 'נפש חזקה בגוף חזק',
          sportType: 'trx',
          rating: 5,
          id: '7'
        },
        {
          description: 'קבוצת סאפ בים הפתוח',
          groupName: 'סאפ הרצליה',
          groupMoto: 'הים השקט מרגיע את הנפש',
          sportType: 'sap',
          rating: 5,
          id: '8'
        },
        {
          description: 'קבוצת אופניים',
          groupName: 'רכיבה נתניה',
          groupMoto: 'אין אין על רכיבת אופניים',
          sportType: 'bicycle',
          rating: 5,
          id: '9'
        },
        {
          description: 'בלט לילדות עד גיל 10',
          groupName: 'בלט נהריה',
          groupMoto: 'בלט',
          sportType: 'ballet',
          rating: 3,
          id: '10'
        },
        {
          description: 'התעמלות קרקע לבנות',
          groupName: 'התעמלוטיקה',
          groupMoto: 'מגיעים הכי רחוק שאפשר',
          sportType: 'gymnastics',
          rating: 5,
          id: '11'
        },
        {
          description: 'באולינג למבוגרים',
          groupName: 'קבוצת פינים',
          groupMoto: 'מורידים את כולם',
          sportType: 'bowling',
          rating: 5,
          id: '12'
        },
        {
          description: 'בייסבול',
          groupName: 'בייסבול',
          groupMoto: 'יאלה בלאגן',
          sportType: 'baseball',
          rating: 5,
          id: '13'
        },
        {
          description: 'פוטבול',
          groupName: 'פוטבול',
          groupMoto: 'הבסיס הזה שלי',
          sportType: 'football',
          rating: 5,
          id: '14'
        },
        {
          description: 'כדור נוצה',
          groupName: 'כדור נוצה',
          groupMoto: 'קל כמו נוצה',
          sportType: 'Badminton',
          rating: 5,
          id: '15'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Categories />
        <Search />
        <Groups groups={this.state.groups}/>
        <Footer />
      </div>
    );
  }
}
