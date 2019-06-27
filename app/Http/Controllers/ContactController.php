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

    // check if firstName and lastName property are set
    $isValidContactData =
      isset($requestBody['firstName']) && isset($requestBody['lastName']);

    // validate if response body data is valid and create new Contact data
    if (!$isValidContactData) {
      return $this->response->errorWrongArgs(
        'firstName and lastName are required!'
      );
    } else {
      // create new contact
      $contact = new Contact([
        'first_name' => $requestBody['firstName'],
        'last_name' => $requestBody['lastName']
      ]);

      // save contact data
      $contact->save();
    }

    // check if phoneNumbers is being passed on request body
    $isValidPhoneNumbersData = isset($requestBody['phoneNumbers']);

    // will execute saving of phone number if present in response data
    if ($isValidPhoneNumbersData) {
      // loop around phone numbers and attach to pivotal table
      foreach ($requestBody['phoneNumbers'] as $number) {
        $phoneNumber = new PhoneNumber(compact('number'));
        $phoneNumber->save();
        $contact->phoneNumbers()->attach($phoneNumber);
      }
      // rerturn an item of contacts
      return $this->response->withItem($contact, new ContactTransformer());
    }
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
      // request data
      $firstNameData = $requestBody['firstName'];
      $lastNameData = $requestBody['lastName'];

      // will map data if they are present in request and will get the existing data if not
      $firstName = isset($firstNameData)
        ? $firstNameData
        : $contact->first_name;
      $lastName = isset($lastNameData) ? $lastNameData : $contact->last_name;

      // will update data depending on the value
      $contact->first_name = $firstName;
      $contact->last_name = $lastName;

      // save contact data
      $contact->save();
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
