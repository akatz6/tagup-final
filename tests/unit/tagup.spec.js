import { shallowMount } from '@vue/test-utils';
import AddNewLog from '@/components/AddNewLog.vue';
import Logs from '@/components/Logs.vue';

describe('AddNewLog.vue', () => {
  it('Add to Log', () => {
    const wrapper = shallowMount(AddNewLog);
    wrapper.vm.title = 'First Title';
    wrapper.vm.text = 'Here is some text';
    wrapper.vm.newCard();
    expect(wrapper.vm.cardsArray.length).toEqual(1);
    expect(wrapper.vm.cardsArray[0]['id']).toMatch('del0');
    expect(wrapper.vm.cardsArray[0]['text']).toMatch('Here is some text');
  });
});

describe('AddNewLog.vue', () => {
  it('Add to Log Click BUtton', () => {
    const wrapper = shallowMount(AddNewLog);
    wrapper.vm.title = 'First Title';
    wrapper.vm.text = 'Here is some text';
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.cardsArray.length).toEqual(1);
    expect(wrapper.vm.cardsArray[0]['id']).toMatch('del0');
    expect(wrapper.vm.cardsArray[0]['text']).toMatch('Here is some text');
  });
});


describe('AddNewLog.vue', () => {
  it('Add two  to Log', () => {
    const wrapper = shallowMount(AddNewLog);
    wrapper.vm.title = 'First Title';
    wrapper.vm.text = 'Here is some text';
    wrapper.vm.newCard();
    wrapper.vm.title = 'Second Title';
    wrapper.vm.text = 'Here is more text';
    wrapper.vm.newCard();

    expect(wrapper.vm.cardsArray.length).toEqual(2);
    expect(wrapper.vm.cardsArray[1]['id']).toMatch('del1');
    expect(wrapper.vm.cardsArray[1]['text']).toMatch('Here is more text');
  });
});

describe('DeleteLog.vue', () => {
  it('Delete from Log', () => {
    const wrapper = shallowMount(Logs);
    wrapper.vm.cardsArray = [
      {
        title: 'First Title',
        text: 'Here is some text',
        id: 'del0',
        modal: '#del0',
      },
      {
        title: 'Second Title',
        text: 'Here is more text',
        id: 'del1',
        modal: '#del1',
      },
    ];

    expect(wrapper.vm.cardsArray.length).toEqual(2);
    wrapper.vm.deleteLog('del0');
    expect(wrapper.vm.cardsArray.length).toEqual(1);
    expect(wrapper.vm.cardsArray[0]['id']).toMatch('del1');
  });
});
