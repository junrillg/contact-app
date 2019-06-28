<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use App\ContactTransformer;
use App\PhoneNumber;
use EllipseSynergie\ApiResponse\Contracts\Response;

class ContactController extends Controller
{
  /**
   * @param Response $response
   */
  public function __construct(Response $response)
  {
    $this->response = $response;
  }

  /**
   * Saving contact information to database
   *
   * @param $requestBody - request body
   * @param $id - contact id
   * @return $contact
   */
  private function saveContact($requestBody, $id)
  {
    // create new contact or update existing contact
    $contact = isset($id) ? Contact::find($id) : new Contact();
    $contact->first_name = isset($id)
      ? $requestBody['firstName'] || $contact->first_name
      : $requestBody['firstName'];
    $contact->last_name = isset($id)
      ? $requestBody['lastName'] || $contact->last_name
      : $requestBody['lastName'];
    // save contact data
    $contact->save();
    return $contact;
  }

  /**
   * Saving phone number information to database
   *
   * @param $requestBody - request body
   * @param $contact - contact data
   */
  private function savePhoneNumbers($requestBody, $contact)
  {
    // loop around phone numbers
    foreach ($requestBody['phoneNumbers'] as $data) {
      if (isset($data['id'])) {
        // will update existing number
        $phoneNumber = PhoneNumber::find($data['id']);
        $phoneNumber->number = $data['number'];
        $phoneNumber->save();
      } else {
        // if number is not existing then save as new number
        $number = $data['number'];
        $phoneNumber = new PhoneNumber(compact('number'));
        $phoneNumber->save();
        $contact->phoneNumbers()->attach($phoneNumber);
      }
    }
  }

  /**
   * Return all contacts via json
   *
   * @return Response
   */
  public function index()
  {
    // Get all contacts
    $contacts = Contact::all();

    // rerturn a collection of contacts
    return $this->response->withCollection($contacts, new ContactTransformer());
  }

  /**
   * Create new contact
   *
   * @param Request $request
   * @return Response
   */
  public function store(Request $request)
  {
    // get all the response body data
    $requestBody = $request->json()->all();

    $contact = $this->saveContact($requestBody, null);
    $this->savePhoneNumbers($requestBody, $contact);

    // rerturn an item of contacts
    return $this->response->withItem($contact, new ContactTransformer());
  }

  /**
   * Update the given contact
   *
   * @param  Request  $request
   * @param  string  $id
   * @return Response
   */
  public function update(Request $request, $id)
  {
    // get all the response body data
    $requestBody = $request->json()->all();

    // retrieve specific contact by id
    $contact = Contact::find($id);

    // will throw an error response when contact doesn't exist
    if (!$contact) {
      return $this->response->errorNotFound("Contact doesn't exist!");
    } else {
      $contact = $this->saveContact($requestBody, $id);
      $this->savePhoneNumbers($requestBody, $contact);
    }
    return $this->response->withItem($contact, new ContactTransformer());
  }

  /**
   * Delete the given contact
   *
   * @param  Request  $request
   * @param  string  $id
   * @return Response
   */
  public function destroy(Request $request, $id)
  {
    $contact = Contact::find($id);
    if (!$contact) {
      return $this->response->errorNotFound("Contact doesn't exist!");
    } else {
      $contact->delete();
      return [
        'message' => 'Successfully deleted!'
      ];
    }
  }
}
