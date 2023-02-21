class Counter {

// static 메서드 : 클래스 레벨의 메서드로 static 키워드를 메서드 앞에 붙여 준다. 인스턴스 생성 없이 접근, 조작 가능

static defaultOptions = {
    count : 1,
    min : 1,
    max : 10,
    step : 1,
}

// constroctor : 인스턴스 메서드가 생성되면 처음 호출 되는 함수
constructor (element,userOptions) { 
    this.component = element;
    this.options = {...Counter.defaultOptions,...userOptions} // 전개구문 사용하여 객체 합성, 순서에 유의

    this.count = this.options.count; // 렌더링시 변화하는 값

    this.init(); // 초기 세팅 느낌?

};



init() {
    this.incrementButton = this.component.querySelector('button:first-child')
    this.decrementButton = this.component.querySelector('button:last-child')
    this.output = this.component.querySelector('output')

    this.incrementButton.addEventListener('click',this.handleIncrement);
    this.decrementButton.addEventListener('click',this.handleDecrement);

    this.render();


    // this.#output = this.#component.querySelector('output');
    // this.#incrementButton = this.#component.firstElementChild;
    // this.#decrementButton = this.#component.lastElementChild;

    // this.#component.addEventListener('click', (e) => {
    //   const { target } = e;

    // elem.matches(css) => elem에 주어진 css 선택자와 일치하는지 판단 true/false 
    // elem.closeset(css) => elem 자기 자신을 포함한 가장 가까운 조상요소를 찾음, 찾으면 해당 요소 반환

    //   if (target.matches('button:first-child')) {
    //     this.increment();
    //     this.#render();
    //   }

    //   if (target.matches('button:last-child')) {
    //     this.decrement();
    //     this.#render();
      
}


handleIncrement = () => {
    const {step,max} = this.options; // 구조분해할당으로 step,max 값 


    let updateCountValue = this.count + step;
    if(updateCountValue > max) {
        updateCountValue = max;
        this.renderIncrementButton(); 
    }
}
handleDecrement = (e) => {
    let { step, min } = this.#options;
    let updateCountValue = this.count - step;
    if (updateCountValue < min) {
      updateCountValue = min;
      this.renderDecrementButton();
    } 
    this.setCount(updateCountValue);
  };

  renderIncrementButton () {
      this.incrementButton.disabled = true;
    }
    renderDecrementButton () {
        this.decrementButton.disabled = true;
    }
    setCount(newCountValue){ // setState의 역할 
        this.count = newCountValue;
        this.render();
        
    }
    render() {
        this.output.value = this.count;
    
    }

}