import React from 'react';

const DemoPage = () => (
  <div className="demo-page card">
    <div className="demo-page__youtube">
      <iframe title="demo" width="560" height="315" src="https://www.youtube.com/embed/rBAXn3LU2Js" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
    <div className="demo-page__about-app">
      <h1 className="demo-page__heading">RSLang</h1>
      <p>
        RSLang — онлайн-сервис для изучения и практики английского языка.
      </p>
      <p>
        Все тренировки интерактивны и основаны на проверенных методиках!
      </p>
      <p>
        Вы сможете создать личный словарь, пройти увлекательное обучение.
        В специальном разделе наглядно виден прогресс обучения.
      </p>
      <p>
        RSLang — это Эффективно и Увлекательно!
      </p>
      <p>
        Подробное описание работы приложения смотрите в видео-ролике.
      </p>
    </div>
  </div>
);

export default DemoPage;
