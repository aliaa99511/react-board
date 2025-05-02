import '../Style/CallbackForm.css';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface FormField {
  type: InputType;
  name: string;
  placeholder: string;
  col: number;
  className?: string;
  options?: string[];
}

const formFields: FormField[] = [
  { type: 'text', name: 'name', placeholder: 'Name', col: 6 },
  { type: 'email', name: 'email', placeholder: 'Email', col: 6 },
  { type: 'text', name: 'phone', placeholder: 'Phone', col: 6 },
  { 
    type: 'select', 
    name: 'service', 
    placeholder: 'Choose our services', 
    options: ['Choose our services', 'Web Development', 'Mobile App', 'UI/UX Design'],
    col: 6,
    className: 'service-select'
  }
];

const CallbackForm = () => {
  return (
    <div className="callback-section">
      <Container>
        <div className="callback-container">
          <Row>
            <Col xs="12" md="6">
              <div className="callback-info">
                <h3>Request A Call Back</h3>
                <p>Posters had been a very beneficial marketing tool because it had paved to deliver an effective message that conveyed customer's attention.</p>
                <h6>CONTACT US</h6>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="callback-form-wrapper">
                <Form className="callback-form">
                  <Row form>
                    {formFields.map((field, index) => (
                      <Col md={field.col} key={index}>
                        <FormGroup>
                          {field.type === 'select' ? (
                            <Input 
                              type="select"
                              className={field.className} 
                              name={field.name}
                              placeholder={field.placeholder}
                            >
                              {field.options?.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                              ))}
                            </Input>
                          ) : (
                            <Input 
                              type={field.type} 
                              name={field.name} 
                              placeholder={field.placeholder} 
                              required
                            />
                          )}
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    <Col>
                      <Button color="success" type="submit" className="submit-btn">SUBMIT</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CallbackForm;