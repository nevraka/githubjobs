import { shallow, mount } from 'enzyme';
import Result from './Result';

describe('result component', () => {
    test('renders title', () => {
        const expectedTitle = 'test title';

        const component = shallow(<Result title={expectedTitle} />);
        const title = component.find('span').first().text();

        expect(title).toBe(expectedTitle);
    });

    test('renders jobs', () => {
        const mockJobs = [
            {
                id: '1234',
                title: 'title',
                company: 'company',
                type: 'type',
                location: 'location',
                created_at: '2021-06-06T18:55:11Z',
            },
        ];

        const component = mount(<Result jobs={mockJobs} />);
        const links = component.find('Link');

        const jobLink = links.at(0);
        const jobURL = jobLink.prop('href');
        const jobTitle = jobLink.text();

        expect(jobURL).toBe('/position/' + mockJobs[0].id);
        expect(jobTitle).toBe(mockJobs[0].title);

        const companyLink = links.at(1);
        const companyURL = companyLink.prop('href');
        const companyTitle = companyLink.text();

        expect(companyURL).toBe('/company/' + mockJobs[0].company);
        expect(companyTitle).toBe(mockJobs[0].company);
    });
});
